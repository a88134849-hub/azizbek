import styled from "styled-components";

export const Shop = styled.div`
  padding: 40px 160px;

  .team {
    color: #b08050;
    font-size: 12px;
    margin: 0 0 8px;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  }

  .top h2 {
    font-size: 32px;
    font-weight: 400;
    margin: 0;
  }

  .tabs {
    display: flex;
    align-items: center;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px 16px;
  }

  .card img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: contain;
    background: #f7f7f7;
  }

  .icons {
    display: flex;
    justify-content: center;
    gap: 16px;
    background: #111;
    color: #fff;
    padding: 6px 0;
  }

  .icons svg {
    font-size: 16px;
  }

  .card h3 {
    font-size: 13px;
    font-weight: 400;
    margin: 8px 0 4px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }

  .old {
    text-decoration: line-through;
    color: #888;
    margin-right: 4px;
  }
`;
