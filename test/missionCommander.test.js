const MissionCommander = require('./../app/missionCommander');

describe("Unit test for mission commander class", () => {
    test('1) Create a mission commander object', () => {
      const Ajolonauta = new MissionCommander("Woopa");
      expect(Ajolonauta.name).toBe("Woopa");
    });
  })
  