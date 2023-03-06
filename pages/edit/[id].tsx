import { useEffect } from 'react';
import { useGetUserQuery, useUpdateUserMutation } from 'store/slices/users/users';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import type { UserProps } from 'store/slices/users/types';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { isFetchBaseQueryError } from 'utils';
import { ClipLoader } from 'react-spinners';
import * as Component from './components';

export default function EditUser() {
  const { query, push } = useRouter();
  const { data, isLoading, error } = useGetUserQuery(Number(query.id));
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();

  useEffect(() => {
    if (isFetchBaseQueryError(error) && error.status === 404) {
      toast(error.data as string, {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'error',
        position: 'bottom-right',
      });
      push('/');
    }
  }, [error, push]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserProps>({
    defaultValues: data,
  });

  const onSubmit = (data: UserProps) => {
    updateUser(data).then(() => {
      push('/');
    });
  };

  useEffect(() => {
    reset(data);
  }, [data, reset]);

  return (
    <Component.Wrapper>
      {isLoading && <ClipLoader />}

      <Component.FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Component.Input {...register('fullName', { required: true })} placeholder="Name" />
          {errors.fullName && <Component.ErrorMessage>Name field is required</Component.ErrorMessage>}
          <Component.ButtonsWrapper>
            <Link href="/">
              <Component.CancelButton type="button">Cancel</Component.CancelButton>
            </Link>
            <Component.SaveButton disabled={isLoading || isUpdating}>Save</Component.SaveButton>
          </Component.ButtonsWrapper>
        </form>
      </Component.FormWrapper>
    </Component.Wrapper>
  );
}
