import styled, { css } from 'styled-components/macro'
import bookmarkMultipleOutline from '../../assets/images/bookmark-multiple-outline.svg'
import bookmarkMultiple from '../../assets/images/bookmark-multiple.svg'

export default function BookmarkButton({ id, isBookmarked, onClickBookmark }) {
  return (
    <Button isBookmarked={isBookmarked} onClick={() => onClickBookmark(id)} />
  )
}

const Button = styled.button`
  position: absolute;
  top: -7px;
  right: 15px;
  background-image: url(${bookmarkMultipleOutline});
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 0px 0px;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  ${({ isBookmarked }) =>
    isBookmarked &&
    css`
      background-image: url(${bookmarkMultiple});
    `}
`
