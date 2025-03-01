import { SearchParams } from 'meilisearch';

type DocSearchHotKeys = string[] | false;

type ButtonTranslations = Partial<{
    buttonText: string;
    buttonAriaLabel: string;
}>;

type FooterTranslations = Partial<{
    selectText: string;
    selectKeyAriaLabel: string;
    navigateText: string;
    navigateUpKeyAriaLabel: string;
    navigateDownKeyAriaLabel: string;
    closeText: string;
    closeKeyAriaLabel: string;
    poweredByText: string;
}>;

type SearchBoxTranslations = Partial<{
    searchDocsPlaceHolder: string;
    resetButtonTitle: string;
    resetButtonAriaLabel: string;
    cancelButtonText: string;
    cancelButtonAriaLabel: string;
}>;

type ModalTranslations = Partial<{
    linkToTheResultAriaLabel: string;
}> & FooterTranslations & SearchBoxTranslations;

interface DocSearchProps {
    host: string;
    apiKey: string;
    indexUid: string;
    clientAgents?: string[];
    /**
     * An array of hotkeys to trigger the search modal.
     * Can be either a single character, for example `s` or `/`,
     * or a combination of modifiers and key, for example `ctrl+k`.
     *
     * Default keys are `['ctrl+k', 's', '/']`
     *
     * Set to `false` to disable default keys.
     */
    hotKeys?: DocSearchHotKeys;
    translations?: DocSearchTranslations;
    searchParams?: SearchParams;
    environment?: typeof window;
    /**
     * Duration to wait between keystores to determine whether a search should happen or not.
     * Defaults to `200`.
     *
     * Set to `false` to disable debouncing.
     *
     * This is an optimization that discards unnecessary search operations, for example,
     * if a user is typing `hello`, we skip search operations for `h`, `he`, `hel` and `hell`
     * as this usually not what the user wants to search for, and instead wait a few milliseconds until
     * the user stops typing for a brief moment, and then we do the search operation.
     * In the previous example, that would be `hello`.
     */
    debounceDuration?: number | false;
}
type DocSearchTranslations = Partial<{
    button: ButtonTranslations;
    modal: ModalTranslations;
}>;

interface DocSearchOptions extends DocSearchProps {
    container: HTMLElement | string;
}
/**
 * Adds a search button to the specified container and setups necessary hotkeys to open the search modal.
 *
 * @returns a function to destroy and remove the search button and the hotkeys listeners.
 */
declare function docsearch(props: DocSearchOptions): () => void;

export { type DocSearchOptions, docsearch as default, docsearch };
