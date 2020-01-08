// @flow

import _ from "lodash";

import sample from "../sample";
import integer from "../integer";

export const removeDoubleSpace = (str: string): string => str.replace(/\s+/g, " ");

/**
 * Generates a random string, optionally of `length` and using chars from provided `charset`.
 */
function string(length?: number, charset?: string): string {
  if (length == null) length = integer(1, 40);
  if (charset == null)
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
  const chars = charset.split("");

  let str = "";

  for (; str.length < length; ) {
    str += sample(chars);

    if (str.length === length) str = removeDoubleSpace(str).trim();
  }

  return str;
}

export default string;
