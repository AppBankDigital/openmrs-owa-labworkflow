import types from 'redux-types';

const BASIC_TYPES = [
  'SUCCEEDED',
  'FAILED',
  'REQUESTED',
];

export default {
  SET_PATIENT: types('set_patient', BASIC_TYPES),
};
export const FETCH_LAB_ORDERS = 'FETCH_LAB_ORDERS';
export const FETCH_NEXT_BATCH_LAB_ORDERS = 'FETCH_NEXT_BATCH_LAB_ORDERS';
export const PRINT_LAB_LABEL = 'PRINT_LAB_LABEL';
export const UPDATE_LAB_ORDER_WITH_ENCOUNTER = 'UPDATE_LAB_ORDER_WITH_ENCOUNTER';
export const FETCH_LAB_TEST_RESULTS = 'FETCH_LAB_TEST_RESULTS';
export const SET_LAB_TEST = 'SET_LAB_TEST';
export const SET_SELECTED_PATIENT = 'SET_SELECTED_PATIENT';
export const ADD_PATIENT = 'ADD_PATIENT';
export const FETCH_LAB_CONCEPT = 'FETCH_LAB_CONCEPT';
export const FETCH_LAB_RESULTS_ENCOUNTER_TYPE = 'FETCH_LAB_RESULTS_ENCOUNTER_TYPE';
export const FETCH_LAB_RESULTS_DATE_CONCEPT = 'FETCH_LAB_RESULTS_DATE_CONCEPT';
export const GET_DATE = 'GET_DATE';
export const SET_CONCEPT_MEMBER = 'SET_CONCEPT_MEMBER';
export const SET_LAB_ORDERS_LIST_FILTERS = 'SET_LAB_ORDERS_LIST_FILTERS';
export const SET_FETCH_STATUS = 'SET_FETCH_STATUS';
export const SET_CONCEPT = 'SET_CONCEPT';
export const SET_LAB_RESULTS_FILTERS = 'SET_LAB_RESULTS_FILTERS';
export const FETCH_LAB_RESULTS_DID_NOT_PERFORM_QUESTION = 'FETCH_LAB_RESULTS_DID_NOT_PERFORM_QUESTION';
export const FETCH_LAB_RESULTS_DID_NOT_PERFORM_REASON = 'FETCH_LAB_RESULTS_DID_NOT_PERFORM_REASON';
export const FETCH_LAB_RESULTS_DID_NOT_PERFORM_ANSWER = 'FETCH_LAB_RESULTS_DID_NOT_PERFORM_ANSWER';
export const FETCH_LAB_RESULTS_TEST_ORDER_NUMBER_CONCEPT = 'FETCH_LAB_RESULTS_TEST_ORDER_NUMBER_CONCEPT';
export const FETCH_PATIENT_LAB_TEST_RESULTS = 'FETCH_PATIENT_LAB_TEST_RESULTS';
export const SET_PATIENT_DATA = 'SET_PATIENT_DATA';
export const FETCH_CONCEPT = 'FETCH_CONCEPT';
export const FETCH_CONCEPT_SUCCEEDED = 'FETCH_CONCEPT_SUCCEEDED';
export const FETCH_CONCEPT_FAILED = 'FETCH_CONCEPT_FAILED';
export const SET_ORDER_LAB_ENCOUNTER = 'SET_ORDER_LAB_ENCOUNTER';
export const SET_ORDER_LIST_FETCH_STATUS = 'SET_ORDER_LIST_FETCH_STATUS';
export const SET_LAB_ORDERS = 'SET_LAB_ORDERS';
export const UPDATE_LAB_ORDERS = 'UPDATE_LAB_ORDERS';
export const CANCEL_ORDER = 'CANCEL_ORDER';
export const FETCH_CONCEPT_CONSTANT = 'FETCH_CONCEPT_CONSTANT';
export const CLEAR_FORM_VALUES = 'CLEAR_FORM_VALUES';
export const CACHE_FORM_VALUE = 'CACHE_FORM_VALUE';
export const RELOAD_FORM = 'RELOAD_FORM';
export const CLEAR_FORM_CACHE = 'CLEAR_FORM_CACHE';
export const SAVE_FULFILLER_STATUS = 'SAVE_FULFILLER_STATUS';
export const SAVE_FULFILLER_STATUS_SUCCEEDED = 'SAVE_FULFILLER_STATUS_SUCCEEDED';
export const SAVE_FULFILLER_STATUS_FAILED = 'SAVE_FULFILLER_STATUS_FAILED';
