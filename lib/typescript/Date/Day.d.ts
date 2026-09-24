import type { PaperTheme } from '../shared/utils';
declare function EmptyDayPure(): import("react").JSX.Element;
export declare const EmptyDay: import("react").MemoExoticComponent<typeof EmptyDayPure>;
declare let caption: ((year: number, month: number, day: number) => string) | undefined;
/** Secondary line under each day number; `month` is 0-based like `Date`. */
export declare function setDayCaption(fn: typeof caption): void;
declare function Day(props: {
    theme: PaperTheme;
    textColorOnPrimary: string;
    day: number;
    month: number;
    year: number;
    selected: boolean;
    inRange: boolean;
    leftCrop: boolean;
    rightCrop: boolean;
    primaryColor: string;
    selectColor: string;
    isToday: boolean;
    disabled: boolean;
    onPressDate: (date: Date) => any;
}): import("react").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof Day>;
export default _default;
//# sourceMappingURL=Day.d.ts.map