export const defaultItem = [
    {
        id: 0,
        label: "Arbeitsbeginn",
        key: 'startTime',
        type: "time",
        value: "07:00",
        useFormatter: false,
    },
    {
        id: 1,
        label: "Aktuelle Überstunden",
        key: 'actualOvertime',
        tooltip:
            "Die Anzahl an Überstunden, die man zu Beginn des Tages gesammelt hat.",
        type: "number",
        value: null,
        placeholder: "0",
        useFormatter: true,
    },
    {
        id: 2,
        label: "Soll-Arbeitszeit (Wöchentlich)",
        key: 'workingTimeDailySoll',
        tooltip: "Netto-Arbeitszeit (Wöchentlich, Soll)",
        type: "number",
        value: 40,
        placeholder: "38,5",
        step: "0.5",
        min: "1",
        max: "48",
        useFormatter: false,
    },
    {
        id: 3,
        label: "Pause",
        key: 'pause',
        type: "time",
        value: "00:30",
        placeholder: "0,5",
        useFormatter: true,
    },
    { id: 4, useFormatter: false },
    {
        id: 5,
        label: "Gewünschtes Arbeitsende",
        key: 'endTime',
        type: "time",
        value: "16:30",
        useFormatter: false,
    },
    {
        id: 6,
        label: "Gewünschte Überstunden",
        key: 'overTime',
        type: "number",
        value: null,
        placeholder: "0",
        useFormatter: true,
    },
]

export const defaultFields = [
    { key: "newLabel", label: "" },
    {
      key: "value1",
      label: "Überstunden",
      tooltip:
        "Die Überstunden werden anhand des gewünschten Arbeitsende berechnet.",
    },
    {
      key: "value2",
      label: "Abmelden",
      tooltip:
        "Das Arbeitsende wird anhand der gewünschten Überstunden berechnet.",
    },
  ]