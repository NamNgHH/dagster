import {useCallback} from 'react';
import styled from 'styled-components';

import {
  opGraphSelectionSyntaxSupportedAttributes,
  useOpGraphSelectionAutoCompleteProvider,
} from './useOpGraphSelectionAutoCompleteProvider';
import {GraphQueryItem} from '../app/GraphQueryImpl';
import {isUnmatchedValueQuery} from '../asset-selection/isUnmatchedValueQuery';
import {parseOpSelectionQuery} from '../op-selection/AntlrOpSelection';
import {OpSelectionLexer} from '../op-selection/generated/OpSelectionLexer';
import {OpSelectionParser} from '../op-selection/generated/OpSelectionParser';
import {InputDiv, SelectionAutoCompleteInput} from '../selection/SelectionInput';
import {createSelectionLinter} from '../selection/createSelectionLinter';
import {weakMapMemoize} from '../util/weakMapMemoize';
export const OpGraphSelectionInput = ({
  items,
  value,
  onChange: _onChange,
}: {
  items: GraphQueryItem[];
  value: string;
  onChange: (value: string) => void;
}) => {
  const onChange = useCallback(
    (value: string) => {
      if (parseOpSelectionQuery([], value) instanceof Error && isUnmatchedValueQuery(value)) {
        _onChange(`name:"*${value}*"`);
      } else {
        _onChange(value);
      }
    },
    [_onChange],
  );
  return (
    <Wrapper>
      <SelectionAutoCompleteInput
        id="op-graph"
        useAutoComplete={useOpGraphSelectionAutoCompleteProvider(items).useAutoComplete}
        placeholder="Search and filter ops"
        linter={getLinter()}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  );
};

const getLinter = weakMapMemoize(() =>
  createSelectionLinter({
    Lexer: OpSelectionLexer,
    Parser: OpSelectionParser,
    supportedAttributes: opGraphSelectionSyntaxSupportedAttributes,
  }),
);

const Wrapper = styled.div`
  ${InputDiv} {
    width: 24vw;
  }
`;
