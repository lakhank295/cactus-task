import { ICommentInfo } from "./commentInfo.model";

export interface ICommentsResponse {
    code: number;
    meta: {
        pagination: {
            total: number;
            pages: number;
            page: number;
            limit: number;
        };
    };
    data: ICommentInfo[];
}