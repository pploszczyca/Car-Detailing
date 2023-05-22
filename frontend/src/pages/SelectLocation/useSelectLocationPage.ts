import {useEffect, useState} from "react";
import useGetLocationsQuery from "../../hooks/queries/useGetLocationsQuery.ts";
import useGetAvailableDatesQuery from "../../hooks/queries/useGetAvailableDatesQuery.ts";

interface Location {
    id: number
    name: string
}

interface Date {
    id: number
    name: string
}

interface ViewState {
    dates: Date[]
    error: string
    isConfirmButtonDisabled: boolean
    isError: boolean
    isLoading: boolean
    locations: Location[]
    selectedDate: Date | undefined
    selectedLocation: Location | undefined
}

interface UseSelectLocationPage {
    viewState: ViewState
    onLocationSelected: (location: Location) => void
    onDateSelected: (date: Date) => void
    onSubmitButtonClicked: () => void
}

const useSelectLocationPage = (): UseSelectLocationPage => {
    const [
        locations,
        setLocations
    ] = useState<Location[]>([])
    const [
        dates,
        setDates
    ] = useState<Date[]>([])
    const [
        selectedLocation,
        setSelectedLocation
    ] = useState<Location>()
    const [
        selectedDate,
        setSelectedDate
    ] = useState<Date>()
    const [
        error,
        setError
    ] = useState<string>("")

    const getLocations = useGetLocationsQuery()
    const getAvailableDates = useGetAvailableDatesQuery()

    useEffect(() => {
        if (getLocations.isSuccess && getLocations.locations != undefined) {
            const locations = getLocations.locations.map(item => ({
                id: item.id,
                name: `${item.name} - ${item.street} ${item.city}`
            }))

            setLocations(locations)
        }
    }, [getLocations.isSuccess])

    useEffect(() => {
        if (getAvailableDates.isSuccess && getAvailableDates.dates != undefined) {
            const dates = getAvailableDates.dates.map(item => {
                const date = new Date(item.dateTime)
                const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}r. godz. ${date.getHours()}.${date.getMinutes()}`

                return {
                    id: item.id,
                    name: formattedDate,
                }
            })

            setDates(dates)
        }
    }, [getAvailableDates.isSuccess])

    useEffect(() => {
        if (getLocations.error != "") {
            setError(getLocations.error)
        } else {
            setError(getAvailableDates.error)
        }

    }, [getLocations.error, getAvailableDates.error])

    const onSubmitButtonClicked = () => {
        // TODO
    }

    return {
        viewState: {
            dates: dates,
            error: error,
            isConfirmButtonDisabled: selectedDate == undefined || selectedLocation == undefined,
            isError: getLocations.isError || getAvailableDates.isError,
            isLoading: getLocations.isLoading || getAvailableDates.isLoading,
            locations: locations,
            selectedDate: selectedDate,
            selectedLocation: selectedLocation,
        },
        onLocationSelected: setSelectedLocation,
        onDateSelected: setSelectedDate,
        onSubmitButtonClicked: onSubmitButtonClicked,
    }
}

export default useSelectLocationPage