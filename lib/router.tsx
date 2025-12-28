import React, { useState, useEffect, createContext, useContext } from 'react';

/**
 * LIGHTWEIGHT HASH ROUTER
 * A zero-dependency router implementation to replace react-router-dom in environments
 * where CDNs are unstable. It uses the URL hash (#) to manage navigation.
 */

// 1. The Contexts
// Global state of the browser URL
const RouterContext = createContext<{ path: string }>({ path: '/' });

// Local state of the matched route (frozen during transitions)
const RouteContext = createContext<{ params: Record<string, string>, path: string } | null>(null);

// 2. The Provider Component
export const BrowserRouter: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [path, setPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handler = () => {
      // Remove the '#' and ensure we default to '/'
      const current = window.location.hash.slice(1) || '/';
      setPath(current);
    };

    // Listen to hash changes
    window.addEventListener('hashchange', handler);
    
    // Initial initialization
    if (!window.location.hash) {
        window.location.hash = '#/';
    } else {
        handler(); // Sync state if page loads with a hash
    }

    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return <RouterContext.Provider value={{ path }}>{children}</RouterContext.Provider>;
};

// 3. The Routes & Route Components
export const Routes: React.FC<{children: React.ReactNode, location?: string}> = ({ children, location }) => {
  const { path: globalPath } = useContext(RouterContext);
  
  // CRITICAL FOR TRANSITIONS: Use the prop 'location' if provided (by AnimatePresence),
  // otherwise fallback to the live global path.
  const activePath = location ?? globalPath;

  let match: React.ReactNode = null;
  let params: Record<string, string> = {};

  React.Children.forEach(children, child => {
    if (match) return; // Already found a match
    if (!React.isValidElement(child)) return;
    
    const props = child.props as any;
    const routePath = props.path;

    // Exact match for root
    if (routePath === '/' && activePath === '/') {
       match = child;
       return;
    }

    // Exact match for other static routes
    if (routePath === activePath) {
        match = child;
        return;
    }

    // Dynamic match (very basic implementation for :slug)
    if (routePath && routePath.includes(':')) {
        const routeSegments = routePath.split('/');
        const currentSegments = activePath.split('/');

        if (routeSegments.length === currentSegments.length) {
            let isMatch = true;
            const tempParams: Record<string, string> = {};

            for (let i = 0; i < routeSegments.length; i++) {
                if (routeSegments[i].startsWith(':')) {
                    // Capture param
                    const paramName = routeSegments[i].slice(1);
                    tempParams[paramName] = currentSegments[i];
                    continue; 
                }
                if (routeSegments[i] !== currentSegments[i]) {
                    isMatch = false;
                    break;
                }
            }
            if (isMatch) {
                match = child;
                params = tempParams;
            }
        }
    }
  });

  return (
    <RouteContext.Provider value={{ params, path: activePath }}>
        {match}
    </RouteContext.Provider>
  );
};

export const Route: React.FC<{path: string, element: React.ReactNode}> = ({ element }) => {
  return <>{element}</>;
};

// 4. Link Component
// Updated: Added onClick prop to support actions like closing menus
export const Link: React.FC<{to: string, children: React.ReactNode, className?: string, onClick?: () => void}> = ({ to, children, className, onClick }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // CRITICAL: Prevents the browser from trying to navigate the iframe/window
        if (onClick) {
            onClick();
        }
        window.location.hash = `#${to}`;
    };

    return (
        <a href={`#${to}`} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}

// 5. Hooks

export const useLocation = () => {
    // Location always reflects the global browser state (navbar needs this)
    const { path } = useContext(RouterContext);
    return { pathname: path };
}

export const useNavigate = () => {
    return (to: string) => {
        window.location.hash = `#${to}`;
    }
}

export const useParams = <T extends Record<string, string>>(): T => {
     // Try to get params from the local RouteContext (frozen state)
     const routeCtx = useContext(RouteContext);
     
     if (routeCtx) {
         return routeCtx.params as T;
     }

     // Fallback to global context (legacy behavior)
     const { path } = useContext(RouterContext);
     if (path.startsWith('/feature/')) {
         const parts = path.split('/');
         if (parts.length >= 3) {
            return { slug: parts[2] } as unknown as T;
         }
     }
     return {} as T;
}

export const Navigate: React.FC<{to: string, replace?: boolean}> = ({ to }) => {
    useEffect(() => {
        window.location.hash = `#${to}`;
    }, [to]);
    return null;
}