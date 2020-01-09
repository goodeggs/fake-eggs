/**
 * Returns a randomly-selected first name, e.g. `Carter`.
 */
type FirstName = () => string;

/**
 * Generates a random last name, e.g., `Armstrong`.
 */
type LastName = () => string;

/**
 * Generates a random phone number, e.g. `+15556797779`.
 */
type PhoneNumber = () => string;

/**
 * Randomly generates a full name, e.g., `Randall Munroe`. `firstName` and `lastName` can
 * optionally be overridden.
 */
type FullName = (firstName?: string, lastName?: string) => string;

/**
 * Returns a randomly-selected email address string (e.g., `dualityhiss@icicle.net`). You can
 * override either portion of the email with `username` and `domain` options.
 */
type Email = (options?: {username?: string; domain?: string}) => string;

interface FakeEggs {
  firstName: FirstName;
  lastName: LastName;
  phoneNumber: PhoneNumber;
  fullName: FullName;
  email: Email;

  /**
   * Generates a random sentence (a string with multiple words), optionally of `length` and using chars from provided `charset`.
   */
  sentence: () => string;
  /**
   * Generates a random word (a string without any white space), optionally of `length` and using chars from provided `charset`.
   */
  word: (length?: number, charset?: string) => string;
  /**
   * Calls supplied `generator` function to return an array of length `lengthLowerInclusive` and
   * `lengthUpperInclusive`.
   */
  array: <T>(lengthLowerInclusive: number, lengthUpperExclusive: number, generator: () => T) => T[];
  /**
   * Returns `true` or `false`, chosen at random.
   */
  boolean: () => boolean;
  customer: {
    firstName: FirstName;
    lastName: LastName;
    phoneNumber: PhoneNumber;
    fullName: FullName;
    email: Email;
  };
  /**
   * Returns a randomly-selected `Date`, optionally between `from` and `to`.
   */
  date: (from?: Date | string, to?: Date | string) => Date;
  /**
   * Returns a randomly-selected day string (`YYYY-MM-DD`), optionally between `from` and `to`.
   */
  day: (from?: Date | string, to?: Date | string) => string;
  /**
   * Returns a randomly-selected digit (integer between 0 and 9).
   */
  digit: number;
  employee: {
    firstName: FirstName;
    lastName: LastName;
    phoneNumber: PhoneNumber;
    fullName: FullName;
    /**
     * Returns a randomly-selected email address at goodeggs.com of the form `randall.munroe@goodeggs.com`.
     * You can override `firstName` and `lastName` by providing appropriate options.
     */
    email: (options?: {firstName?: string; lastName?: string}) => string;
  };
  // TODO(ndhoule): Look into supporting this; it primarily targets flowtype right now.
  // factory: ...,
  foodhub: {
    /**
     * Returns a randomly-selected foodhub slug, e.g. `sfbay`.
     */
    slug: () => string;
  };
  /**
   * Generates a random integer (could be negative!). Optionally between `lowerExclusive` and `upperExclusive`.
   */
  integer: (lowerInclusive?: number, upperExclusive?: number) => number;
  inventoryLot: {
    label: () => string;
  };
  /**
   * Potentially returns `null`, `undefined`, or the result of the supplied `returnValue` function.
   *
   * Useful for maybe types in Flow, e.g.:
   *
   * ```
   * {
   *   maybeValue: ?boolean,
   * }
   * ```
   */
  maybe: <T>(returnValue: () => T) => T | null | undefined;
  /**
   * Generates a random `number`, optionally between `lowerInclusive` and `upperExclusive`.
   */
  nullable: <T>(returnValue: () => T) => T | null;
  number: (lowerInclusive?: number, upperExclusive?: number) => number;
  objectId: (options?: {
    timestamp?: string | Date | number;
    from?: string | Date;
    to?: string | Date;
    machineId?: number;
    processId?: number;
    counter?: number;
  }) => string;
  /**
   * Returns `undefined` or the result of the supplied `returnValue` function.
   *
   * Useful for specifying optional object properties in Flow, e.g.:
   *
   * ```
   * {
   *   optionalValue?: boolean,
   * }
   * ```
   */
  optional: <T>(returnValue: () => T) => T | undefined;
  producer: {
    /**
     * Generates a random producer name, e.g., `Bahringer`.
     */
    name: () => string;
    /**
     * Generates a random producer slug, e.g., `anderson`. Optionally can override with an explicit
     * name to generate from.
     */
    slug: (nameArg?: string) => string;
  };
  product: {
    /**
     * Generates a random product count, e.g., `31`.
     */
    count: () => number;
    /**
     * Generates a random product name, e.g. `Hargrand Apricots`.
     */
    name: () => string;
    /**
     * Generates a random storage type, e.g., `chill`.
     */
    storageType: () => string;
    /**
     * Generates a random product unit, e.g. `count`.
     */
    unit: () => string;
  };
  /**
   * Chooses one of the elements of the provided `array`.
   */
  sample: <T>(array: T[]) => T;
  /**
   * Generates a random string, optionally of `length` and using chars from provided `charset`.
   */
  string: (length?: number, charset?: string) => string;
  /**
   * Generate a random tzid, e.g., `America/Denver`.
   */
  tzid: () => string;
  /**
   * Generate a random URI, e.g., `https://adl2j.goodeggs.com/ax/faj23`
   */
  uri: (domain?: string) => string;
  warehouseLocation: {
    /**
     * Returns a random aisle, e.g., `F`.
     */
    aisle: () => string;
    /**
     * Returns a location label for a warehouse location, e.g., `cF12-3`
     */
    label: () => string;
    /**
     * Returns a random rack, e.g., `12`;
     */
    rack: () => string;
    /**
     * Returns a random shelf, e.g., `3`
     */
    shelf: () => string;
    /**
     * Returns a random zone, e.g. `chill`.
     */
    zone: () => string;
  };
}

declare const fake: FakeEggs;
export default fake;
