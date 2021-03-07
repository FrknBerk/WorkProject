using System;
using System.Collections.Generic;
using System.Runtime.Caching;
using System.Text;

namespace Caching
{
    public class MemoryCacheManager : ICache
    {
        ObjectCache cache;
        public MemoryCacheManager()
        {
            cache = MemoryCache.Default;
        }
        public void Add<T>(string key, T source)
        {
            //60 dakika boyunca cache'de tutacak
            var policy = new CacheItemPolicy { AbsoluteExpiration = DateTimeOffset.Now.AddMinutes(60) };
            cache.Add(key, source, policy);
        }

        public bool Contains(string key)
        {
            return cache.Contains(key);
        }

        public T Get<T>(string key)
        {
            return (T)cache.Get(key);
        }

        public void Remove(string key)
        {
            cache.Remove(key);
        }
    }
}
