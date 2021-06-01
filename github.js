class Github
{constructor(){
    this.clientId='b4a7623ce45d107d4675';
    this.clientSecret='cf028f4a13f869fbbfac27d76eedcdf5146abd16';
    this.repoCount=5;
    this.sort='created:asc';

// yaha pr hmne apna client id daal ke aync request maara(Abhi ke liye syntax hi smkjh aaya) aur aysnc await ke promise ko .then se use kiya
}
async getUser(user){
    /*making request*/const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`)
  /*making request*/  const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
  /*converting into js objects to use properties*/ const profile= await profileResponse.json();
   const repo= await repoResponse.json();

   return{
       profile:profile,
       repo:repo
   }
}}