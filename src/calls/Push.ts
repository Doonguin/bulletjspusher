export type PushType = 'note' | 'link' | 'file';

export interface PushData {
    type: PushType;
    [key: string]: any;
}