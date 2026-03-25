import axiosInstrance from '../utils/axiosInstance';
import { API_PATHS} from '../utils/apiPaths';
import axios from 'axios';

const getAllFlashcardSets = async () => {
    try {
        const response = await axiosInstrance.get(API_PATHS.FLASHCARDS.GET_ALL_FLASHCARD_SETS);
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: 'Failed to fetch flashcard sets '};
    }
};

const getFlashcardForDocument = async (documentId) => {
    try {
        const response  = await axiosInstrance.get(API_PATHS.FLASHCARDS.GET_FLASHCARD_FOR_DOC(documentId));
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: 'Failed to fetch flashhard '};
    }
};

const reviewFlashcard = async (cardId , cardIndex) => {
    try {
        const response = await axiosInstrance.post(API_PATHS.FLASHCARDS.REVIEW_FLASHCARD(cardId), {cardIndex});
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to review flashcard' };
    }
};

const toogleStar = async (cardId) => {
    try {
        const response = await axiosInstrance.put(API_PATHS.FLASHCARDS.TOGGLE_STAR(cardId));
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: 'Failed to star Flashcard'};
    }
};

const deleteFlashcardSet = async (id) => {
    try {
        const response = await axiosInstrance.delete(API_PATHS.FLASHCARDS.DELETE_FLASHCARD_SET(id));
        return response.data;
    } catch (error) {
        throw error.response?.data || {message: 'Failed to delete flashcards'};
    }
};

const flashcardService ={
    getAllFlashcardSets,
    getFlashcardForDocument,
    reviewFlashcard,
    toogleStar,
    deleteFlashcardSet,
}

export default flashcardService;