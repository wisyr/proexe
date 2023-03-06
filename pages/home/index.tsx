import { ClipLoader } from 'react-spinners';
import { useDeleteUserMutation, useGetUsersQuery } from 'store/slices/users/users';
import Link from 'next/link';
import { isFetchBaseQueryError } from 'utils';
import * as Component from './components';

export default function Home() {
  const { data, error, isLoading } = useGetUsersQuery();
  const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

  return (
    <Component.Wrapper>
      {(isLoading || isDeleting) && <ClipLoader color="blue" />}

      {error && (
        <Component.ErrorMessage>{isFetchBaseQueryError(error) ? error.status : error.message}</Component.ErrorMessage>
      )}

      {data?.map(({ id, fullName, imageUrl }) => (
        <Component.UserRow key={id}>
          <Component.UserInfoWrapper>
            <Component.UserImageWrapper>
              <Component.UserImage src={imageUrl} />
            </Component.UserImageWrapper>
            <Component.UserName>{fullName}</Component.UserName>
          </Component.UserInfoWrapper>
          <Component.ButtonsWrapper>
            <Component.DeleteButton onClick={() => deleteUser(id)}>Delete</Component.DeleteButton>
            <Link href={`/edit/${id}`}>
              <Component.EditButton>Edit</Component.EditButton>
            </Link>
          </Component.ButtonsWrapper>
        </Component.UserRow>
      ))}
    </Component.Wrapper>
  );
}
