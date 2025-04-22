import { Card } from '@/components/ui/card'
import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { Tabs,TabsList,TabsTrigger } from '@/components/ui/tabs'
import NewEntry from './NewEntry'
import AllEntries from './AllEntries'

const Main = ({emojis,weatherIcons}) => {
    const [theme,setTheme]=useState("light")
    const [selectedMood,setSelectedMood]=useState(null)
    const [date,setDate]=useState(new Date)
    const [note,setNote]=useState("")
    const [weather, setWeather] = useState({
            temp: 0,
            condition: "sunny",
    });
    const [entries,setEntries]=useState([])

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
      }
    const getDayEntries = (day) => {
        return entries.filter(
            (entry) =>
            entry.date.getDate() === day.getDate() &&
            entry.date.getMonth() === day.getMonth() &&
            entry.date.getFullYear() === day.getFullYear(),
        )
    }

    const dateHasEntry = (day) => {
        const entriesOnDay = getDayEntries(day)
        if (entriesOnDay.length === 0) return undefined

        return entriesOnDay[0].mood
    }

      

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-400 to-blue-600 ${theme === "dark" ? "dark:from-blue-900 dark:to-blue-950" : ""}`}>
        <div className='w-full max-w-3xl'>
            <Card className={`${theme === "dark" ? "bg-gray-800/90 text-white" : "bg-white/90 text-gray-900"} backdrop-blur-sm shadow-xl`}>
                <Header theme={theme} setTheme={setTheme} weatherIcons={weatherIcons} toggleTheme={toggleTheme} weather={weather}/>

                <Tabs defaultValue="new-entry" className="w-full p-5">
                    <TabsList className="grid w-full grid-cols-3 mb-4">
                        <TabsTrigger value="new-entry">New Entry</TabsTrigger>
                        <TabsTrigger value="all-entries">All Notes</TabsTrigger>
                        <TabsTrigger value="trends">Trends</TabsTrigger>
                    </TabsList>

                    <NewEntry emojis={emojis} selectedMood={selectedMood} setSelectedMood={setSelectedMood} date={date} setDate={setDate} note={note} setNote={setNote} theme={theme} getDayEntries={getDayEntries} dateHasEntry={dateHasEntry} weather={weather} entries={entries} setEntries={setEntries}/>

                    <AllEntries entries={entries} theme={theme} emojis={emojis} weatherIcons={weatherIcons} />
                </Tabs>
            </Card>

        </div>
    </main>

  )
}

export default Main
