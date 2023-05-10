import { useState, FormEvent } from 'react';

import { getAnimeList } from './api';
import { selectBars } from './texts';

import {
  wrapStyle,
  contentStyle,
  textStyle,
  formStyle,
  selectBarStyle,
} from './SearchBlock.styles';
import Input from '../../common/Input';
import SelectMenu from '../../common/SelectMenu/selectMenu';
import { Option } from '../../common/SelectMenu/types';
import AnimeCards from '../AnimeCards';

import { animeData } from '../../../mocks/anime';

const SearchBlock: React.FC = () => {
  const [searchProps, setSearchProps] = useState({
    query: 'trending now',
    type: '',
    rating: '',
    status: '',
    order_by: '',
  });

  // DEV only
  // @ts-ignore
  const [apiResponse, setApiResponse] = useState(animeData);

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // DEV uncomment after dev
    // const res = await getAnimeList(searchProps);
    // setApiResponse(res);
  };

  const handleChange = (value: string, field: string) => {
    setSearchProps({ ...searchProps, [field]: value });
  };

  const renderSelectBars = selectBars.map((selectBar) => {
    return (
      <div css={selectBarStyle} key={selectBar.type}>
        <span css={textStyle}>{selectBar.value}</span>
        <SelectMenu
          options={selectBar.options}
          onChange={(e: Option) => handleChange(e.value, selectBar.type)}
        />
      </div>
    );
  });

  return (
    <div css={wrapStyle}>
      <div css={contentStyle}>
        <form onSubmit={handleSearch} css={formStyle} id="search-form">
          <div>
            <span css={textStyle}>Search</span>
            <Input type="text" onChange={(e: string) => handleChange(e, 'query')} />
          </div>
          {renderSelectBars}
        </form>
        {apiResponse && <AnimeCards data={apiResponse.data} />}
      </div>
    </div>
  );
};

export default SearchBlock;
