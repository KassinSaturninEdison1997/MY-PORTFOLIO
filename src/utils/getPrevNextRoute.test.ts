import { getPrevNextRoute } from "./getPrevNextRoute";

test("should return only NEXT value", () => {
  const current = "a-propos";
  const getPrevNextValue = getPrevNextRoute(current);

  expect(getPrevNextValue.next).toEqual(
    expect.objectContaining({
      key: "experiencesprofessionnels",
      path: "/experiences-professionnelles",
    })
  );
  expect(getPrevNextValue.prev).toBeUndefined();
});

test("should return PREV NEXT value", () => {
  const current = "experiencesprofessionnels";
  const getPrevNextValue = getPrevNextRoute(current);

  expect(getPrevNextValue.next).toEqual(
    expect.objectContaining({
      key: "formations",
      path: "/formations",
    })
  );
  expect(getPrevNextValue.prev).toEqual(
    expect.objectContaining({
      key: "a-propos",
      path: "/a-propos",
    })
  );
});

test("should return only PREV value", () => {
  const current = "nous-contacter";
  const getPrevNextValue = getPrevNextRoute(current);

  expect(getPrevNextValue.prev).toEqual(
    expect.objectContaining({
      key: "besoins-freelancer",
      path: "/besoins-freelancer",
    })
  );
  expect(getPrevNextValue.next).toBeUndefined();
});
