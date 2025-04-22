import React from 'react'
import { Button } from '@/components/ui/button'
import { TabsContent } from '@/components/ui/tabs'
import {format} from "date-fns"
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { toast, Toaster } from 'sonner'

const NewEntry = ({emojis,weather,date,setDate,selectedMood,setSelectedMood,note,setNote,theme,dateHasEntry,setEntries}) => {

    const handleSave = () => {
        if (!selectedMood) return

        toast("Entry Saved Successfully!")
    
        const newEntry = {
          id: Date.now().toString(),
          date: date,
          mood: selectedMood,
          note,
          weather: { ...weather },
        }
    
        setEntries((prev) => [newEntry, ...prev])
        setSelectedMood(null)
        setNote("")
      }
  return (
    <TabsContent value="new-entry" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
            <div className="text-lg font-medium">{format(date, "MMMM d, yyyy")}</div>
            <div>
                <p className="mb-2 font-medium">How are you feeling today?</p>
                <div className="flex gap-2">
                {Object.entries(emojis).map(([mood, emoji]) => (
                    <Button
                    key={mood}
                    variant={selectedMood === mood ? "default" : "outline"}
                    className={`text-2xl h-12 w-12 p-0 ${selectedMood === mood ? "bg-blue-500 hover:bg-blue-600" : ""}`}
                    onClick={() => setSelectedMood(mood)}
                    >
                    {emoji}
                    </Button>
                ))}
                </div>
            </div>
            <div>
                <Textarea
                placeholder="Add a note..."
                className="min-h-[100px]"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                />
            </div>
            <Button
                className={`w-full ${theme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"}`}
                onClick={handleSave}
                disabled={!selectedMood}
            >
                Save
            </Button>
            </div>
            <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => date && setDate(date)}
            className="rounded-md w-screen"
            modifiers={{
                happy: (date) => dateHasEntry(date) === "happy",
                sad: (date) => dateHasEntry(date) === "sad",
                angry: (date) => dateHasEntry(date) === "angry",
                neutral: (date) => dateHasEntry(date) === "neutral",
                tired: (date) => dateHasEntry(date) === "tired",
            }}
            modifiersClassNames={{
                happy: `${theme === "dark" ? "bg-green-900 text-green-300" : "bg-green-100 text-green-600"}`,
                sad: `${theme === "dark" ? "bg-blue-900 text-blue-300" : "bg-blue-100 text-blue-600"}`,
                angry: `${theme === "dark" ? "bg-red-900 text-red-300" : "bg-red-100 text-red-600"}`,
                neutral: `${theme === "dark" ? "bg-yellow-900 text-yellow-300" : "bg-yellow-100 text-yellow-600"}`,
                tired: `${theme === "dark" ? "bg-purple-900 text-purple-300" : "bg-purple-100 text-purple-600"}`,
            }}
            />
        </div>
    </TabsContent>
  )
}

export default NewEntry
