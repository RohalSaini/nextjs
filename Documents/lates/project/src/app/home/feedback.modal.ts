export interface Feedback {
    email: string,
    username: string,
    suggestion: string
} 

export interface FeedbackResponse {
    statusCode: number,
    success: boolean,
    data: Feedback
  }