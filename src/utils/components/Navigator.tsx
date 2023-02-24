import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navigator({ pathname }: { pathname: string }) {
    const navigator = useNavigate();

    useEffect(() => {
        navigator(pathname);
    }, [navigator, pathname]);

    return <></>;
}

export default Navigator;
