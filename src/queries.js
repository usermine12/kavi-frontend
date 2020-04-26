import { gql } from '@apollo/client'

export const getProduct = gql`
query getProduct($idToSearch: ID!) {
  product(id: $idToSearch) {
    id
    name
    price
    postage
    volume
    vol
    KAVI
    url
    img
    comments {
      message
      author
      date
    }
  }
}
`

export const queryBeers = gql`
query {
  allBeers {
    id
    name
    price
    postage
    volume
    vol
    KAVI
    url
    img
  }
}
`

export const queryCiders = gql`
query {
  allCiders {
    id
    name
    price
    postage
    volume
    vol
    KAVI
    url
    img
  }
}
`

export const querySpirits = gql`
query {
  allSpirits {
    id
    name
    price
    postage
    volume
    vol
    KAVI
    url
    img
  }
}
`

export const queryEffervescents = gql`
query {
  allEffervescents {
    id
    name
    price
    postage
    volume
    vol
    KAVI
    url
    img
  }
}
`

export const queryBoxWines = gql`
query {
  allBoxWines {
    id
    name
    price
    postage
    volume
    vol
    KAVI
    url
    img
  }
}
`

export const queryWines = gql`
query {
  allWines {
    id
    name
    price
    postage
    volume
    vol
    KAVI
    url
    img
  }
}
`


export const queryVeganWines = gql`
query {
  allVeganWines {
    id
    name
    price
    postage
    volume
    vol
    KAVI
    url
    img
  }
}
`

export const querySortingFilter = gql`
  {
    sortingFilter @client
  }
`

export const queryModalOpen = gql`
  {
    modalOpen @client
  }
`