/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserCycle = /* GraphQL */ `
  query GetUserCycle($id: ID!) {
    getUserCycle(id: $id) {
      id
      cycles
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserCycles = /* GraphQL */ `
  query ListUserCycles(
    $filter: ModelUserCycleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserCycles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cycles
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
