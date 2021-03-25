import {Chance} from 'chance';

/**
 * Returns a randomly-selected email address string (e.g., `dualityhiss@icicle.net`).
 * You can override either portion of the email with `username` and `domain` options.
 */
const createEmailGenerator = (chance: Chance.Chance) => ({
  domain,
  username,
}: {domain?: string; username?: string} = {}): string => {
  const email = chance.email(domain != null ? {domain} : undefined);
  if (username != null) {
    return email.replace(/.+@/, `${username}@`);
  }
  return email;
};

export default createEmailGenerator;
