import Quiz from '../models/Quiz.js';

//@desc    Get all quizzes for a document
//@route   GET  /api/quizzes/:documentId
//@access  Private
export const getQuizzes = async(req ,res ,next ) => {
    try {
        
    } catch (error) {
        next(error);
    }
}

//@desc    Get a single quiz by Id
//@route   GET /api/quizzes/quiz/:id
//@access  Private
export const getQuizById = async (req, res, next ) => {
    try {
        
    } catch (error) {
        next(error);
    }
}

//@desc     Submit Quiz answer
//@route    POST /api/quizzes/:id/submit
//@access   Private
export const submitQuiz = async (req ,res , next) => {
    try {
        
    } catch (error) {
        next(error);
    }
}

//@desc    Get quiz Results
//@route   POST  /api/quizzes/:id/results
//@access  Private
export const getQuizResults = async (req ,res ,next) => {
    try {
        
    } catch (error) {
        next(error);
    }
};

//@desc    Delete quiz
//@route   DELETE  /api/quizzes/:id
//@access  Private
export const deleteQuiz = async (req ,res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
};