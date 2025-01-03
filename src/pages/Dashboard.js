import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useLocation, useNavigate } from 'react-router-dom';
import Overview from '../components/Overview';
import TransactionBody from '../components/TransactionBody';
import { useParams } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import CategoryIcon from '@mui/icons-material/Category';
import PersonIcon from '@mui/icons-material/Person';
import InsightsIcon from '@mui/icons-material/Insights';
import {Insights} from "@mui/icons-material";
import InsightsBody from "../components/Insights";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CustomizeBody from "../components/CustomizeBody";

const NAVIGATION = [
    {
        kind: 'header',
        title: 'Main items',
    },
    {
        segment: 'dashboard',
        title: 'Dashboard',
        icon: <DashboardIcon />,
    },
    {
        segment: 'insights',
        title: 'Insights',
        icon: <InsightsIcon/>,
    },
    {
        segment: 'transactions',
        title: 'Transactions',
        icon: <ReceiptIcon />
    },
    {
        segment: 'settings',
        title: 'Settings',
        icon: <SettingsIcon/>,
        children: [
            {
                segment: 'customize',
                title: 'Customize',
                icon: <DashboardCustomizeIcon/>,
            },
            {
                segment: 'profile',
                title: 'Profile',
                icon: <PersonIcon/>,
            },
        ],
    },
    // {
    //     kind: 'divider',
    // },
    // {
    //     kind: 'header',
    //     title: 'Analytics',
    // },

    // {
    //     segment: 'integrations',
    //     title: 'Integrations',
    //     icon: <LayersIcon />,
    // },
];

const demoTheme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                mode: 'dark', // Enforce dark mode only
                background: {
                    default: '#222020', // Main background color of the app
                    paper: '#495144', // Background color for elements like Paper, Cards, etc.
                },
                primary: {
                    main: '#f1f1f1', // Example primary color if needed
                },
                secondary: {
                    main: '#5d715d', // Example secondary color if needed
                },
            },
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
});

function useRouter() {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => {
                if (navigate) {
                    navigate(path);
                } else {
                    console.error('Navigation not available');
                }
            },
        };
    }, [pathname, navigate]);
}

export default function Dashboard(props) {
    const router = useRouter('/dashboard');

    const navigation = () => {
        if (router.pathname === '/dashboard') return <Overview />;
        else if (router.pathname === '/transactions') return <TransactionBody />;
        else if (router.pathname === '/insights') return <InsightsBody/>
        else if (router.pathname === '/settings/customize') return  <CustomizeBody/>
    };

    const [session, setSession] = React.useState({
        user: {
            name: 'Bharat Kashyap',
            email: 'bharatkashyap@outlook.com',
            image: 'https://avatars.githubusercontent.com/u/19550456',
        },
    });

    const authentication = React.useMemo(() => {
        return {
            signIn: () => {
                setSession({
                    user: {
                        name: 'Bharat Kashyap',
                        email: 'bharatkashyap@outlook.com',
                        image: 'https://avatars.githubusercontent.com/u/19550456',
                    },
                });
            },
            signOut: () => {
                setSession(null);
            },
        };
    }, []);

    return (
            <AppProvider
                session={session}
                authentication={authentication}
                navigation={NAVIGATION}
                router={router}
                theme={demoTheme}
                branding={{ logo: '', title: 'GoPESOWISE' }}
            >
                <DashboardLayout>{navigation()}</DashboardLayout>
            </AppProvider>
    );
}
