export const getLesserEvil = (threat1, threat2) => {
  if (threat2.evilFactor < threat1.evilFactor) {
    return threat2;
  }
  return threat1;
}