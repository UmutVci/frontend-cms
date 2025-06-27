import Select from "react-select";
import React from "react";

const x = () => {
    return (
        <div>
            <label className="block text-black font-semibold">Select Sessions</label>
            <Select
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
                options={sessions.map((session) => ({
                    value: session.id,
                    label: `${session.startTime} - Hall ID: ${session.hall}`,
                }))}
                value={sessions
                    .filter((s) => selectedSessions.includes(s.id))
                    .map((s) => ({
                        value: s.id,
                        label: `${s.startTime} - Hall ID: ${s.hall}`,
                    }))
                }
                onChange={(selected) =>
                    setSelectedSessions(selected.map((option) => option.value))
                }
            />
        </div>
    )
}