import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SchoolIcon from '@mui/icons-material/School';
import AssistantIcon from '@mui/icons-material/Assistant';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ContactlessIcon from '@mui/icons-material/Contactless';
import { ReactNode } from 'react';

export interface ISideOption {
    label: string;
    icon: ReactNode;
    key: string;
    path: string;
}

export const getSideItems = () => {
    return [
        {
            key: "a-propos",
            label: "A propos",
            icon: AccessibilityNewIcon,
            path: "/a-propos"
        },
        {
            key: "experiencesprofessionnels",
            label: "Expériences professionnelles",
            icon: WidgetsIcon,
            path: "/experiences-professionnelles"
        },
        {
            key: "formations",
            label: "Formations",
            icon: SchoolIcon,
            path: "/formations"
        },
        {
            key: "certifications",
            label: "Certifications",
            icon: AssistantIcon,
            path: "/certifications"
        },
        {
            key: "realisations",
            label: "Réalisations",
            icon: WorkspacePremiumIcon,
            path: "/realisations"
        },
        {
            key: "besoins-freelancer",
            label: "Besoins d'un freelancer",
            icon: MeetingRoomIcon,
            path: "/besoins-freelancer"
        },
        {
            key: "nous-contacter",
            label: "Nous contacter",
            icon: ContactlessIcon,
            path: "/nous-contacter"
        }
    ]
}