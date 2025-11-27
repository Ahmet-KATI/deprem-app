import React from 'react';
import { Home, Map, Bell, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
    const navItems = [
        { icon: Home, label: 'Ana Sayfa', path: '/home' },
        { icon: Map, label: 'Harita', path: '/map' },
        { icon: Bell, label: 'Alarmlar', path: '/settings' }, // Using settings as Alarms for now
        { icon: User, label: 'Profil', path: '/profile' },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border flex justify-around items-center h-16 z-50 max-w-[480px] mx-auto shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                        `flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${isActive ? 'text-primary' : 'text-text-secondary'
                        }`
                    }
                >
                    <item.icon size={24} strokeWidth={2} />
                    <span className="text-[10px] font-medium">{item.label}</span>
                </NavLink>
            ))}
        </div>
    );
};

export default BottomNav;
