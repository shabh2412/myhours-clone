import { TrackInit } from './../Store/Track/reducer';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react'
import { RootReducer } from '../Store/store';
import { getClientDataThorughQuery, getProjectDataThorughQuery, getProjectTaskDataThroughQuery, TrackAddDescriptionAction, TrackInputAddClientOrProjectAction, TrackInputAddDescriptionAction, TrackInputAddTagsAction, TrackInputAddTaskAction, TrackJustCarryClientOrProjectAction, TrackJustCarryTaskAction, TrackTimeGapAction, TrackTimeLogArrAction } from '../Store/Track/action';

export type TaskReturn = {
    handleAddClientOrProjectInput : (e :string) => void,
    handleAddTagsInput : (e :string) => void,
    handleAddDescription : (e :string) => void,
    handleAddTask : (e :string) => void,
    state : TrackInit,
    handleAdd : (e:string) => void,
    handleAddCarryTask : ( e:string ) => void,
    handleTimeGap : ( e:string) => void,
    handleTaskArrAction : () => void
}

const useTask = (): TaskReturn  => {

    const state = useSelector((state : RootReducer) => state.track)
    const dispatch = useDispatch()

    const handleAddClientOrProjectInput = ( e: string ): void => {
        dispatch(TrackInputAddClientOrProjectAction(e))
        dispatch(getProjectDataThorughQuery(e))
        dispatch(getClientDataThorughQuery(e))
    }

    const handleAddTagsInput = ( e :string ): void => {
        dispatch(TrackInputAddTagsAction(e))
    }

    const handleAddTask = ( e:string ): void => {
        dispatch(TrackInputAddTaskAction(e))
        dispatch(getProjectTaskDataThroughQuery(e))
    }

    const handleAdd = ( e:string ) : void => {
        dispatch(TrackJustCarryClientOrProjectAction(e))
    }

    const handleAddCarryTask = ( e :string ): void => {
        dispatch(TrackJustCarryTaskAction(e))
    }

    const handleAddDescription = ( e:string ): void => {
        dispatch(TrackAddDescriptionAction(e))
    }

    const handleTimeGap = ( e:string ): void => {
        dispatch(TrackTimeGapAction(e))
    }

    const handleTaskArrAction = ( ): void => {

        let obj = []

        let o = {
            carryingProjectOrClient : state.carryingProjectOrClient,
            carryingTask : state.carryingTask,
            carryingDescription : state.carryingDescription,
            carryingTimeGap : state.carryingTimeGap
        }

        obj.push(o)

        dispatch(TrackTimeLogArrAction(obj))
    }

    return { handleTaskArrAction,handleTimeGap,handleAddCarryTask,handleAdd,state,handleAddClientOrProjectInput, handleAddTagsInput, handleAddDescription, handleAddTask }
    
}

export default useTask