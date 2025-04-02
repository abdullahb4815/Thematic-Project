import {useTheme} from 'src/utils/ThemeContext';

export default function ThemeToggle() {
    const {isDark, setIsDark} = useTheme();
    
    return (
        <button 
        onClick={() => setIsDark(!isDark)}
        className="theme-toggle"

        >
            {isDark ? '🌙' : '☀️'}
        </button>
    );
 }