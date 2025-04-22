import React from 'react'
import { CardHeader,CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button';
import { Sun,Moon } from 'lucide-react';

const Header = ({theme,weatherIcons,toggleTheme,weather}) => {
    

  return (
    <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className={`text-2xl font-bold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
            MoodMate
        </CardTitle>
        <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
            {weatherIcons[weather.condition]}
            <span className="text-sm font-medium">{weather.temp}°C</span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-9 h-9" aria-label="Toggle theme">
            {theme === "dark" ? (
                <Moon className="h-5 w-5 text-blue-200" />
            ) : (
                <Sun className="h-5 w-5 text-yellow-500" />
            )}
            </Button>
        </div>
    </CardHeader>
  )
}

export default Header
