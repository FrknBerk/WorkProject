using Business.Abstract;
using DataAccess.Abstract;
using Entities.Concrete;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Concrete
{
    public class UserManager : IUserService
    {
        IUserDal _userDal;
        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }
        public bool Add(User user)
        {
            if (user ==null)
            {
                return false;
            }
            _userDal.Add(user);
            return true;
        }

        public void Delete(User user)
        {
            _userDal.Delete(user);
        }

        public List<User> GetAll()
        {
            return _userDal.GetAll();
        }


        public bool Update(User user)
        {
            if (user ==null)
            {
                return false;
            }
            _userDal.Update(user);
            return true;
        }
    }
}
