import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { View } from 'react-native';
import ScreenHome from '../../components/screenHome';
import ScreenMyPage from '../../components/screenMyPage';
import { ROUTES } from '../../config';

const pages = {};
pages[ROUTES.HOME] = ScreenHome;
pages[ROUTES.MY_PAGE] = ScreenMyPage;

const App = () => {
    const router = useRouter();
    useEffect(() => {
    }, [router.asPath]);
    const Page = pages[router.query?.slug] || View;

    return (
        <Page router={router} />
    );
};

export default App;
