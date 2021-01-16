import { IPostInfo } from './postInfo.model';

export interface IAllUserResponse {
    code: number;
    meta: {
        pagination: {
            total: number;
            pages: number;
            page: number;
            limit: number;
        };
    };
    data: IPostInfo[];
}