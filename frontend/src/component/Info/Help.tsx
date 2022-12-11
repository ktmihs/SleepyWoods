import { useState } from 'react';
import help from '../../assets/icon/help.svg';
import BoardAndRankInfo from './HelpDescription/BoardAndRankInfo';
import KeyBoardInfo from './HelpDescription/keyBoardInfo';
import SidebarInfo from './HelpDescription/SidebarInfo';
import WalkAndUserInfo from './HelpDescription/WalkAndUserInfo';

import * as style from './info.styled';

const Help = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [animation, setAnimation] = useState('show');

  const handleModal = () => {
    if (isShowModal) {
      setAnimation('close');
      setTimeout(() => setIsShowModal(false), 300);
    } else {
      setAnimation('show');
      setIsShowModal(true);
    }
  };

  return (
    <>
      {isShowModal && (
        <>
          <section css={style.modal(animation)}>
            <button
              type="button"
              css={style.closeBtn}
              onClick={handleModal}></button>
            <h3 css={style.header}>📋 Notice</h3>
            <div css={style.content}>
              <KeyBoardInfo />
              <SidebarInfo />
              <BoardAndRankInfo />
              <WalkAndUserInfo />
            </div>
          </section>
        </>
      )}
      <button
        type="button"
        onClick={handleModal}
        css={style.info(help)}></button>
    </>
  );
};

export default Help;
