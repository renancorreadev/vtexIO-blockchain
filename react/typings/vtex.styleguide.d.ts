/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
// Type definitions for vtex.styleguide 9.145.2
// Definitions by: João Azevedo <https://github.com/joaoazevedoJS>
// TypeScript Version: 3.8.3

declare module "vtex.styleguide" {
  import type {
    ComponentType,
    ReactNode,
    InputHTMLAttributes,
    TextareaHTMLAttributes,
  } from "react";

  type MouseEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

  export const ToastProvider: ComponentType;

  // / ////////////////////////////////////////////////////////////////////////////
  // / //////////////////////////  ADMIN STRUCTURE  ///////////////////////////////
  // / ////////////////////////////////////////////////////////////////////////////

  /** Layout Component * */

  type ILayout = {
    /**
     * Content of the Layout.
     */
    children: ReactNode;
    /**
     * A PageHeader component slot.
     */
    pageHeader: ReactNode;
    /**
     * If the content fills the whole width.
     */
    fullWidth?: boolean;
  };

  /**
   * We built the page layout component in order to establish layout standards
   * across VTEX admins. This standardization helps to create user patterns and
   * impacts the user experience while using our platform. With these standards,
   * our user became more aware of use and interaction. Thus we created this
   * component with only two versions, centered and full.
   *
   * @see [Layout Component](https://styleguide.vtex.com/#/Components/Admin%20structure/Layout)
   */
  export const Layout: ComponentType<ILayout>;

  /** PageBlock Component * */

  type IPageBlockFit = "fill" | "fill-horizontal" | "fill-vertical" | "none";

  type IPageBlockVariation = "full" | "half" | "annotated" | "aside";

  type IPageBlockBoxProps = {
    noPadding: boolean;
    title: string;
  };

  type IPageBlock = {
    /**
     * Contents of the boxes. Can be 1 or 2 nodes depending on the variation chosen.
     */
    children: ReactNode;
    /**
     * Determines if and how the PageBlock should fit the parent's element dimensions.
     */
    fit?: IPageBlockFit;
    /**
     * Subtitle for the block.
     */
    subtitle?: string;
    /**
     * Data attribute.
     */
    testId?: string;
    /**
     * Title for the block.
     */
    title?: string;
    /**
     * Content on the right side of the title.
     */
    titleAside?: ReactNode;
    /**
     * Type of layout grid for the content.
     */
    variation?: IPageBlockVariation;
    /**
     * Box component props.
     */
    boxProps?: IPageBlockBoxProps;
  };

  /**
   * Page blocks are the building blocks of a page. After choosing a layout you
   * can use the Page Blocks to design the page as you will. There are four main
   * kinds of Page blocks, full, Half, Aside and annotated. They are off to be
   * used to fulfill design needs and to display the page content with the due
   * visual hierarchy.
   *
   * #### 👍 DOS
   *
   * - Use to build a page layout;
   * - Use to create information hierarchy;
   *
   * #### 👎 DON'TS
   *
   * - PageBlock title is not the box title, it’s the title of a whole section.
   *   Boxes titles should be inside them;
   * - Over complicate the header aside. It should be very concise such as a
   *   button or a dropdown;
   *
   * @see [PageBlock Component](https://styleguide.vtex.com/#/Components/Admin%20structure/PageBlock)
   */
  export const PageBlock: ComponentType<IPageBlock>;

  /** PageHeader Component * */

  type IPageHeader = {
    /**
     * Title for the header.
     */
    title: ReactNode;
    children?: ReactNode;
    /**
     * Label for the back button.
     */
    linkLabel?: ReactNode;
    onLinkClick?: (e: MouseEvent) => void;
    /**
     * Subtitle for the header.
     */
    subtitle?: ReactNode;
  };

  /**
   * A simple header for Admin modules and Apps with simple navigation needs.
   *
   * #### 👍 DOS
   *
   * - Keep the page title short. It's a title, after all. Use the module name
   *   in the title if it's the first page.
   * - Use the previous page title as the label of the back link.
   * - Use the main action button if it's clear what would be the most import
   *   action of the entire page. Otherwise just don't.
   *
   * #### 👎 DON'TS
   *
   * - Don't change dynamically the main page action upon action on the page.
   *   The main action should be as static as the title is.
   *
   * @see [PageHeader Component](https://styleguide.vtex.com/#/Components/Admin%20structure/PageHeader)
   */
  export const PageHeader: ComponentType<IPageHeader>;

  /** FloatingActionBar Component * */

  type IFloatingActionBarUnionType = IButton & {
    label: string | ReactNode;
  };

  type IFloatingActionBar = {
    /**
     * The Cancel button props (label + Styleguide Button props)
     *
     * @see [Button Component](https://styleguide.vtex.com/#/Components/Forms/Button)
     */
    cancel?: IFloatingActionBarUnionType;
    /**
     * The Save button props (label + Styleguide Button props)
     *
     * @see [Button Component](https://styleguide.vtex.com/#/Components/Forms/Button)
     */
    save?: IFloatingActionBarUnionType;
  };

  /**
   * Floating Action Bar allow users to easily find the save button while
   * editing an instance of an entity.
   *
   * #### 👍 DOS
   *
   * - Only use when the action affects the whole page.
   * - The actions on this component may be used to help user cancel or proceed
   *   a new change.
   * - This component can be used anywhere but it will always show at the bottom
   *   of the page.
   *
   * @see [Button Component](https://styleguide.vtex.com/#/Components/Admin%20structure/FloatingActionBar)
   */
  export const FloatingActionBar: ComponentType<IFloatingActionBar>;

  // / ////////////////////////////////////////////////////////////////////////////
  // / ////////////////////////////  CONTAINERS  //////////////////////////////////
  // / ////////////////////////////////////////////////////////////////////////////

  /** Box Component * */

  type IBoxFit = "fill" | "fill-horizontal" | "fill-vertical" | "none";

  type IBox = {
    /**
     * Content of the box.
     */
    children: ReactNode;
    /**
     * Defines if and how the Box should fit the parent element.
     */
    fit?: IBoxFit;
    /**
     * Use the full size of the box.
     */
    noPadding?: boolean;
    /**
     * Title to the box.
     */
    title?: string;
  };

  /**
   * A simple container for organizing stuff of any sizes or hierarchies.
   *
   * #### 👎 DON'TS
   *
   * - Don't make the whole box as a big interactable area, use a
   *   [Card](https://styleguide.vtex.com/#/Components/Containers/Card) for that.
   *
   * @see [Box Component](https://styleguide.vtex.com/#/Components/Containers/Box)
   */
  export const Box: ComponentType<IBox>;

  /** Card Component * */

  type ICard = {
    /**
     * Content of the card.
     */
    children: ReactNode;
    /**
     * Use the full size of the card.
     */
    noPadding?: boolean;
  };

  /**
   * A Card like any container improves scannability of a design when well used.
   * What sets the Card apart is that it has higher visual prominence and invites
   * interactivity with its fancy drop shadow.
   *
   * #### 👍 DOS
   *
   * - It works best when used as a big button.
   * - Do use buttons inside it if you need, but keep it simple.
   *
   * #### 👎 DON'TS
   *
   * - Don't nest cards.
   * - Avoid using it to encompass the entirety of a page.
   *
   * @see [Card Component](https://styleguide.vtex.com/#/Components/Containers/Card)
   */
  export const Card: ComponentType<ICard>;

  /** Collapsible Component * */

  type ICollapsibleAlign = "right" | "left";

  type ICollapsibleArrowAlign =
    | "start"
    | "center"
    | "end"
    | "baseline"
    | "stretch";

  type ICollapsibleCaretColor = "base" | "primary" | "muted";

  type ICollapsibleOnClick = MouseEvent & {
    target: {
      isOpen: boolean;
    };
  };

  type ICollapsible = {
    /**
     * Content of the collapsible.
     */
    children: ReactNode;
    /**
     * Component to be used as the header of the collapsible.
     */
    header: ReactNode;
    /**
     * Caret alignment. Use right alignment only in small width scenarios.
     */
    align?: ICollapsibleAlign;
    /**
     * Vertical position of arrow icon.
     */
    arrowAlign?: ICollapsibleArrowAlign;
    /**
     * Color or semantic to be applied to the Caret Icon in the Collapsible header.
     */
    caretColor?: ICollapsibleCaretColor;
    /**
     * Controls whether the collapsible is open or not.
     */
    isOpen?: boolean;
    /**
     * Controls whether the collapsible should hide overflowing components.
     * (e.g. Turn the overflow off to avoid popup menus in the childen component
     * to be cropped.)
     */
    isOverflowHidden?: boolean;
    /**
     * @deprecated Use the 'muted' option in the caretColor prop instead. To be
     * used only in dense scenarios, or when the affordance is clearly conveyed
     * by the context.
     */
    muted?: boolean;
    /**
     * onClick event.
     */
    onClick?: (e: ICollapsibleOnClick) => void;
  };

  /**
   * Collapsibles are containers that allows an toggling the display of an
   * initially hidden content. Its main objective is to hide from view detailed
   * information that might not be necessarily.
   *
   * #### 👍 DOS
   *
   * - Do make your header as complex as you want, but avoid nesting
   *   interactive elements.
   * - Do nest collapsibles if needed, but avoid too many levels.
   *
   * #### 👎 DON'TS
   *
   * - Don't hide information that you consider critical for the user in that
   *   given moment. For the same reason, it doesn't make sense to initialize a
   *   collapsible in the expanded state.
   * - Avoid using the right-aligned variation with widths larger than around
   *   600px or if affordance might be at stake.
   * - Avoid using the muted variation if affordance is not well secured.
   *
   * @see [Collapsible Component](https://styleguide.vtex.com/#/Components/Containers/Collapsible)
   */
  export const Collapsible: ComponentType<ICollapsible>;

  /** Divider Component * */

  type IDividerOrientation = "vertical" | "horizontal";

  type IDivider = {
    orientation?: IDividerOrientation;
  };

  /**
   * @see [Divider Component](https://styleguide.vtex.com/#/Components/Containers/Divider)
   */
  export const Divider: ComponentType<IDivider>;

  // / ////////////////////////////////////////////////////////////////////////////
  // / /////////////////////////////  DISPLAY  ////////////////////////////////////
  // / ////////////////////////////////////////////////////////////////////////////

  /** EmptyState Component * */

  type IEmptyState = {
    children?: ReactNode;
    /**
     * Title of the component
     */
    title?: string | ReactNode;
    /**
     * Data attribute
     */
    testId?: string;
    /**
     * Component's height
     */
    height?: number;
  };

  /**
   * An Empty State shows something when there's nothing to show. Instead of
   * leaving the user with a blank space, it explains what should be there and
   * encourage to take an appropriate action.
   *
   * #### 👍 DOS
   *
   * - Guide the user to what should be done to populate that screen, either if
   *   it's an empty search result or onboarding of a new product feature.
   * - Although its parts (heading, body and call-to-action) are all optional,
   *   do try to use most of them.
   * - You may use as a call-to-action whatever makes more sense to you: a button,
   *   a link, etc.
   * - Do use an illustration or icon if it's very important for your product to
   *   delight the user at this step.
   *
   * #### 👎 DON'TS
   *
   * - Don't use informal language. An empty state might be a break in the user
   *   expectations, so it's not the time to be funny. But do try to be friendly
   *   and instructive.
   * - Don't reuse the same copy for empty search results and empty application states.
   *
   * @see [EmptyState Component](https://styleguide.vtex.com/#/Components/Display/EmptyState)
   */
  export const EmptyState: ComponentType<IEmptyState>;

  /** FilterBar Component * */

  type IFilterBarStatement = {
    error: any;
    object: any;
    subject: string;
    verb: string;
  };

  type IFilterBarDeviceType = "phone" | "desktop" | "tablet";

  type IFilterBarOptionVerb = {
    label: string;
    value: string;
    object: (props: any) => any;
  };

  type IFilterBarOption = {
    [key: string]: {
      label: string;
      renderFilterLabel(cb: IFilterBarStatement): void;
      verbs: IFilterBarOptionVerb[];
    };
  };

  type IFilterBarTestIds = {
    moreOptionsButton: string;
    submitFiltersButton: string;
    clearFiltersButton: string;
  };

  type IFilterBar = {
    /**
     * Filters change callback: returns array of statement definitions.
     */
    onChangeStatements(cb: IFilterBarStatement): void;
    /**
     * filter options that are always visible outside MORE options.
     */
    alwaysVisibleFilters: string[];
    /**
     * if this label is passed, when some filter is not empty a clear all button
     * will appear
     */
    clearAllFiltersButtonLabel?: string;
    device?: IFilterBarDeviceType;
    /**
     * Disable all filters.
     */
    disabled?: boolean;
    /**
     * If the application is running in a mobile device (it is necessary in SSR
     * applications)
     */
    isMobile?: boolean;
    /**
     * label for MORE options.
     */
    moreOptionsLabel?: string;
    /**
     * New Filter title label for inside the 'More options' menu.
     */
    newFilterLabel?: string;
    /**
     * Function to render the 'No options' when user input match no options in
     * 'More options select'.
     */
    noOptionsMessage?: (cb: IFilterBarStatement) => void;
    /**
     * filter options (mirroring statements from Conditions component)
     */
    options: IFilterBarOption;
    /**
     * filter statements (mirroring statements from Conditions component)
     */
    statements: IFilterBarStatement[];
    /**
     * Subject select placeholder inside 'More options'.
     */
    subjectPlaceholder?: string;
    /**
     * Submit button label for statement inside FilterTag
     */
    submitFilterLabel?: string;
    testIds?: IFilterBarTestIds;
  };

  /**
   * The FilterBar is a slim, optimized way of displaying filter atoms. Although
   * tailored to be used with the Table component, it can also be used on its own
   * with any other way you chose to display your data.
   *
   * #### 👍 DOS
   *
   * - Apply user research to choose which filters to show in the highlighted section.
   * - Use the FilterBar always on top of the content that will be filtered.
   * - Try offering as many filters and operators as possible. With the diversity
   *   of operations VTEX supports, we can never predict all the diverse use cases
   *   our merchants need.
   *
   * #### 👎 DON'TS
   *
   * - Don't present too many filters in the highlighted zone.
   *
   * @see [FilterBar Component](https://styleguide.vtex.com/#/Components/Display/FilterBar)
   */
  export const FilterBar: ComponentType<IFilterBar>;

  /** FilterOptions Component * */

  type IFilterOptions = {
    /**
     * Filters change callback: returns array of statement definitions.
     */
    onChangeStatements(cb: IFilterBarStatement): void;
    /**
     * Filter options (mirroring statements from Conditions component)
     */
    options: IFilterBarOption;
    /**
     * Filter statements (mirroring statements from Conditions component)
     */
    statements: IFilterBarStatement[];
  };

  /**
   * The FilterOptions is a more horizontally compacted way of displaying filter
   * atoms. Although designed to be used with the Modal component, it can also be
   * used on its own with any other way you chose to display your data.
   *
   * #### 👍 DOS
   *
   * - Use the FilterOptions near of the content that will be filtered.
   * - Try offering as many filters and operators as possible. With the diversity
   *   of operations VTEX supports, we can never predict all the diverse use cases
   *   our merchants need.
   * - Hide the component when possible. After applying the filters is possible
   *   to display which filters are applied with other components.
   *
   * #### 👎 DON'TS
   *
   * - Don't present too many filters in one single FilterOptions.
   *
   * @see [FilterOptions Component](https://styleguide.vtex.com/#/Components/Display/FilterOptions)
   */
  export const FilterOptions: ComponentType<IFilterOptions>;

  /** Spinner Component * */

  type ISpinner = {
    /**
     * Sets the display to block
     */
    block?: boolean;
    /**
     * Color of the spinner
     */
    color?: string;
    /**
     * Size (diameter) of the spinner
     */
    size?: number;
  };

  /**
   * A Spinner is a way of showing the user something is being loaded, either
   * because of a user action or not. It should be used for short, indeterminate
   * loading times.
   *
   * #### 👍 DOS
   *
   * - Mind the color contrast with the background.
   * - For very long waiting times (10+ seconds) try giving some feedback about
   *   the progress that is being made in the background.
   * - If you're showing a spinner in a button make sure to make it disabled while loading.
   * - For very recurrent actions where the probability of success if very high consider
   *   using an optimistic approach. E.g.: a message being sent.
   *
   * #### 👎 DON'TS
   *
   * - Only use spinners for loading times of more than 1 second. Less than that
   *   it'll cause more harm than good.
   * - Avoid showing too many spinners at a given time in the same screen, it'll
   *   look overwhelming.
   *
   * @see [Spinner Component](https://styleguide.vtex.com/#/Components/Display/Spinner)
   */
  export const Spinner: ComponentType<ISpinner>;

  // / ////////////////////////////////////////////////////////////////////////////
  // / ///////////////////////////////  FORMS  ////////////////////////////////////
  // / ////////////////////////////////////////////////////////////////////////////

  /** Button Component * */

  type IButton = {
    [key: string]: any;
  };

  export const Button: ComponentType<IButton>;

  /** DatePicker Component * */

  type IDatePicker = {
    onChange(cb: Date): void;
    [key: string]: any;
  };

  export const DatePicker: ComponentType<IDatePicker>;

  /** Checkbox Component * */

  type ICheckbox = {
    [key: string]: any;
  };

  export const Checkbox: ComponentType<ICheckbox>;

  // / ////////////////////////////////////////////////////////////////////////////
  // / ///////////////////////////////  ICONS  ////////////////////////////////////
  // / ////////////////////////////////////////////////////////////////////////////

  type IIcons = {
    size?: number;
    color?: string;
  };

  export const IconArrowBack: ComponentType<IIcons>;
  export const IconArrowDown: ComponentType<IIcons>;
  export const IconArrowUp: ComponentType<IIcons>;
  export const IconBars: ComponentType<IIcons>;
  export const IconBold: ComponentType<IIcons>;
  export const IconCalendar: ComponentType<IIcons>;
  export const IconCaretDown: ComponentType<IIcons>;
  export const IconCaretLeft: ComponentType<IIcons>;
  export const IconCaretRight: ComponentType<IIcons>;
  export const IconCaretUp: ComponentType<IIcons>;
  export const IconCheck: ComponentType<IIcons>;
  export const IconClear: ComponentType<IIcons>;
  export const IconClock: ComponentType<IIcons>;
  export const IconClose: ComponentType<IIcons>;
  export const IconCog: ComponentType<IIcons>;
  export const IconColumns: ComponentType<IIcons>;
  export const IconCopy: ComponentType<IIcons>;
  export const IconDelete: ComponentType<IIcons>;
  export const IconDensity: ComponentType<IIcons>;
  export const IconDeny: ComponentType<IIcons>;
  export const IconDownload: ComponentType<IIcons>;
  export const IconEdit: ComponentType<IIcons>;
  export const IconExternalLink: ComponentType<IIcons>;
  export const IconExternalLinkMini: ComponentType<IIcons>;
  export const IconFailure: ComponentType<IIcons>;
  export const IconFilter: ComponentType<IIcons>;
  export const IconGrid: ComponentType<IIcons>;
  export const IconHelp: ComponentType<IIcons>;
  export const IconInfo: ComponentType<IIcons>;
  export const IconInlineGrid: ComponentType<IIcons>;
  export const IconLink: ComponentType<IIcons>;
  export const IconMinus: ComponentType<IIcons>;
  export const IconOptionsDots: ComponentType<IIcons>;
  export const IconPlus: ComponentType<IIcons>;
  export const IconPlusLines: ComponentType<IIcons>;
  export const IconPrinter: ComponentType<IIcons>;
  export const IconSave: ComponentType<IIcons>;
  export const IconSearch: ComponentType<IIcons>;
  export const IconShoppingCart: ComponentType<IIcons>;
  export const IconSuccess: ComponentType<IIcons>;
  export const IconTableFilter: ComponentType<IIcons>;
  export const IconUpload: ComponentType<IIcons>;
  export const IconUser: ComponentType<IIcons>;
  export const IconVisibilityOff: ComponentType<IIcons>;
  export const IconVisibilityOn: ComponentType<IIcons>;
  export const IconWarning: ComponentType<IIcons>;
  export const IconItalic: ComponentType<IIcons>;
  export const IconImage: ComponentType<IIcons>;
  export const IconOrderedList: ComponentType<IIcons>;
  export const IconUnderline: ComponentType<IIcons>;
  export const IconUnorderedList: ComponentType<IIcons>;

  // not typings

  export const Tabs: ComponentType<any>;
  export const Tab: ComponentType<any>;

  type IRadioGroupOnChange = {
    currentTarget: {
      value: string;
    };
  };

  type IRadioGroup = {
    onChange(cb: IRadioGroupOnChange): any;
    [key: string]: any;
  };

  export const RadioGroup: ComponentType<IRadioGroup>;

  type IDropdown = {
    onChange(event: object, value: string): any;
    [key: string]: any;
  };

  export const Dropdown: ComponentType<IDropdown>;

  type IInputSizeType = "small" | "regular" | "large";

  interface IInput extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size: IInputSizeType;
    [key: string]: any;
  }

  export const Input: ComponentType<IInput>;

  interface ITextarea
    extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "maxLength"> {
    maxLength: string;
    [key: string]: any;
  }

  export const Textarea: ComponentType<ITextarea>;

  type IButtonGroup = {
    buttons: IButton[];
    [key: string]: any;
  };

  export const ButtonGroup: ComponentType<IButtonGroup>;

  type INumericStepperOnChange = {
    value: number;
  };

  type INumericStepper = {
    [key: string]: any;
    onChange(event: INumericStepperOnChange): any;
  };

  export const NumericStepper: ComponentType<INumericStepper>;

  export const SelectableCard: ComponentType<any>;

  export const Progress: ComponentType<any>;

  export const Modal: ComponentType<any>;

  export const Table: ComponentType<any>;

  export const InputCurrency: ComponentType<IInput>;

  export const EXPERIMENTAL_Select: ComponentType<any>;

  type IAlertTypes = "error" | "warning" | "success";

  type IAlert = {
    onClose?: () => void;
    type: IAlertTypes;
  };

  export const Alert: ComponentType<IAlert>;
}
