import faker from "faker";
import randomColor from "randomcolor";
import moment from "moment";

// Define keys for group and item properties.
var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title",
};

/**
 * Generates fake data for a timeline. Taken from the example to provide some data to show.
 *
 * @param {number} groupCount - The number of groups to generate.
 * @param {number} itemCount - The number of items to generate.
 * @param {number} daysInPast - The number of days in the past to consider.
 * @returns {object} - An object containing generated data.
 */
export default function (groupCount = 30, itemCount = 1000, daysInPast = 30) {
  let randomSeed = Math.floor(Math.random() * 1000);
  let groups = [];
  for (let i = 0; i < groupCount; i++) {
    groups.push({
      id: `${i + 1}`,
      title: faker.name.firstName(),
      rightTitle: faker.name.lastName(),
      bgColor: randomColor({ luminosity: "light", seed: randomSeed + i }),
    });
  }

  let items = [];
  for (let i = 0; i < itemCount; i++) {
    const startDate =
      faker.date.recent(daysInPast).valueOf() + daysInPast * 0.3 * 86400 * 1000;
    const startValue =
      Math.floor(moment(startDate).valueOf() / 10000000) * 10000000;
    const endValue = moment(
      startDate + faker.random.number({ min: 2, max: 20 }) * 15 * 60 * 1000
    ).valueOf();

    items.push({
      id: i + "",
      group: faker.random.number({ min: 1, max: groups.length }) + "",
      title: faker.hacker.phrase(),
      start: startValue,
      end: endValue,
      className:
        moment(startDate).day() === 6 || moment(startDate).day() === 0
          ? "item-weekend"
          : "",
      itemProps: {
        "data-tip": faker.hacker.phrase(),
      },
    });
  }

  items = items.sort((a, b) => b - a);

  return { keys, groups, items };
}
