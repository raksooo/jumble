import React, { useCallback } from 'react';
import { useProfile, useProvider, useDelayedSpace } from '3box-react-hooks';
import { SPACE_NAME } from '../constants';
import { useBool, useEffectIf } from '../helpers/helperHooks';

const Authentication = ({ space: openedSpace, setSpace }) => {
  const provider = useProvider();
  const profile = useProfile();
  const [space, openSpace, box] = useDelayedSpace(SPACE_NAME);
  const [pressed, setPressed] = useBool();

  const authenticate = useCallback(() => {
    setPressed();
    openSpace();
  }, [openSpace]);

  useEffectIf(() => {
    box.onSyncDone(() => setSpace(space));
  }, [box, space], space != null && openedSpace == null);

  if (provider == null) {
    return 'Web3 not available';
  }

  return (
    <button onClick={authenticate} disabled={pressed}>
      {'Sign in as '}
      {profile != null ? profile.name : '...' }
    </button>
  );
};

export default React.memo(Authentication);

