import {rem} from "@heathmont/moon-utils";
import styled from 'styled-components';

const TD = styled.div<{ selectable?: boolean }>(({ theme, selectable }) => ({
  padding: theme.newTokens.space.small,
  paddingLeft: selectable ? theme.newTokens.space.small : theme.newTokens.space.twoxsmall,
  paddingRight: theme.newTokens.space.twoxsmall,
  color: theme.colorNew.bulma,
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '1px',
    backgroundColor: theme.colorNew.beerus,
    height: '60%',
    bottom: '20%',
    right: 0,
  },
  '&:first-child': {
    borderTopLeftRadius: theme.newTokens.borderRadius.medium,
    borderBottomLeftRadius: theme.newTokens.borderRadius.medium,
  },
  '&:last-child': {
    borderTopRightRadius: theme.newTokens.borderRadius.medium,
    borderBottomRightRadius: theme.newTokens.borderRadius.medium,
    '&::after': {
      width: 0,
    },
  },
}));

export default TD;
