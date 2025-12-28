import React, { useState, useEffect, createContext, useContext } from 'react';

/**
 * LIGHTWEIGHT HASH ROUTER
 * Eine robustere Version für Hosting-Umgebungen wie GitHub Pages.
 */

const RouterContext = createContext<{ path: string }>({ path: '/' });
const RouteContext = createContext<{ params: Record<string, string>, path: string } | null>(null);

const getCleanPath = () => {
    const hash = window.location.hash;
    if (!hash) return '/';
    const path = hash.slice(1);
    return path.startsWith('/') ? path : `/${path}`;
};

export const BrowserRouter: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [path, setPath] = useState(getCleanPath());

  useEffect(() => {
    const handler = () => {
      setPath(getCleanPath());
    };

    window.addEventListener('hashchange', handler);
    
    // Initialer Check: Wenn kein Hash da ist, setzen wir ihn auf #/
    if (!window.location.hash) {
        window.location.hash = '#/';
    } else {
        handler();
    }

    return () => window.removeEventListener('hashchange', handler);
  }, []);

  return <RouterContext.Provider value={{ path }}>{children}</RouterContext.Provider>;
};

export const Routes: React.FC<{children: React.ReactNode, location?: string}> = ({ children, location }) => {
  const { path: globalPath } = useContext(RouterContext);
  const activePath = location ?? globalPath;

  let match: React.ReactNode = null;
  let params: Record<string, string> = {};

  React.Children.forEach(children, child => {
    if (match) return;
    if (!React.isValidElement(child)) return;
    
    const props = child.props as any;
    const routePath = props.path;

    if (routePath === '/' && activePath === '/') {
       match = child;
       return;
    }

    if (routePath === activePath) {
        match = child;
        return;
    }

    if (routePath && routePath.includes(':')) {
        const routeSegments = routePath.split('/').filter(Boolean);
        const currentSegments = activePath.split('/').filter(Boolean);

        if (routeSegments.length === currentSegments.length) {
            let isMatch = true;
            const tempParams: Record<string, string> = {};

            for (let i = 0; i < routeSegments.length; i++) {
                if (routeSegments[i].startsWith(':')) {
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

export const Link: React.FC<{to: string, children: React.ReactNode, className?: string, onClick?: () => void}> = ({ to, children, className, onClick }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (onClick) onClick();
        const target = to.startsWith('/') ? to : `/${to}`;
        window.location.hash = `#${target}`;
    };

    return (
        <a href={`#${to}`} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}

export const useLocation = () => {
    const { path } = useContext(RouterContext);
    return { pathname: path };
}

export const useNavigate = () => {
    return (to: string) => {
        const target = to.startsWith('/') ? to : `/${to}`;
        window.location.hash = `#${target}`;
    }
}

export const useParams = <T extends Record<string, string>>(): T => {
     const routeCtx = useContext(RouteContext);
     return (routeCtx?.params || {}) as T;
}

export const Navigate: React.FC<{to: string, replace?: boolean}> = ({ to }) => {
    useEffect(() => {
        const target = to.startsWith('/') ? to : `/${to}`;
        window.location.hash = `#${target}`;
    }, [to]);
    return null;
}