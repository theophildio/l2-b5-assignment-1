function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLocaleLowerCase() : input.toUpperCase();
}

