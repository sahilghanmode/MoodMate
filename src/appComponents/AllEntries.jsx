import React from 'react'
import { TabsContent } from '@/components/ui/tabs'
import { CardContent } from '@/components/ui/card'
import { Card } from '@/components/ui/card'
import {format} from "date-fns"


const AllEntries = ({entries,theme,emojis,weatherIcons}) => {
  return (
    <TabsContent value="all-entries">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {entries.length === 0 ? (
            <p
                className={`text-center col-span-2 py-8 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
            >
                No entries yet. Start by adding your mood!
            </p>
            ) : (
            entries.map((entry) => (
                <Card
                key={entry.id}
                className={`overflow-hidden ${theme === "dark" ? "bg-gray-700" : "bg-white"}`}
                >
                <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                    <div className="text-3xl">{emojis[entry.mood]}</div>
                    <div className="flex-1">
                        <p className="font-medium">{entry.note}</p>
                        <div
                        className={`flex items-center justify-between mt-2 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
                        >
                        <span>{format(new Date(entry.date), "MMMM d, yyyy")}</span>
                        {entry.weather && (
                            <div className="flex items-center gap-1">
                            {weatherIcons[entry.weather.condition]}
                            <span>{entry.weather.temp}°C</span>
                            </div>
                        )}
                        </div>
                    </div>
                    </div>
                </CardContent>
                </Card>
            ))
            )}
        </div>
    </TabsContent>

  )
}

export default AllEntries
