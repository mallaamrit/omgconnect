<template>
<div class="w-full m-5">
  <div class="flex justify-between m-2 ">
    <div class="text-2xl font-bold">Media Landscape</div>
    <div><button class="bg-primary rounded text-white px-5 py-3">+ Upload File</button></div>
  </div>
  <div class="w-full mx-1 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-2 ">
    <div class="flex items-center  justify-center m-5 p-5  rounded border-gray-300 dark:border-gray-700  border-2 h-36 border-b">
          <div class="space-y-1 text-center">
            <div class="flex text-sm text-gray-600">
              <label for="file-upload"
                class="relative cursor-pointer rounded-md bg-white ">
                <span class="text-sm font-normal leading-5 not-italic text-primary"> + Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" class="sr-only" />
              </label>
            </div>
            <p class="text-sm font-normal leading-5 not-italic text-secondary">(20mb max file size)</p>
          </div>
    </div>
    <div v-for="file in files" :key="file.fileName">
    <div class="m-5 p-5 rounded border-gray-300 dark:border-gray-700  border-2 h-36 border-b">
      <div class="flex gap-3 border-b p-1">
      
          <svg  v-if="file.video" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
          </svg>
      
       
          <svg  v-else class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>

        <div>
          <p class="text-sm font-normal leading-5 not-italic">{{file.fileName}}</p>
          <span class="text-sm font-normal leading-5 not-italic text-secondary">{{file.uploadDate}}</span>
        </div>
      </div>
      <div class="mt-9 flex w-full justify-between ">
        <div class="flex gap-2">
          <div data-bs-toggle="tooltip" title="Delete">
            <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="#9EB3CC" class="w-6 h-6 ">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg></a>
          </div>
  
          <div data-bs-toggle="tooltip" title="Edit">
            <a href=""><svg class="w-6 h-6" fill="none" stroke="#9EB3CC" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                </path>
              </svg></a>
  
          </div>
          <div data-bs-toggle="tooltip" title="Archive">
            <a href=""> <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth={1.5} stroke="#9EB3CC" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
              </svg></a>
  
          </div>
        </div>
  
        <div class="flex divide-x divide-gray-400 text-primary  text-xs">
          <div class="px-2">
            <a href=""><span>View</span></a>
          </div>
          <div class="px-2">
            <a href=""><span>Download</span></a>
          </div>
        </div>
      </div>
    </div>
    </div>  
</div>
  
</div>


   
    


</template>

<script>
  export default {
    data()
    {
      return {
        files : [
          {
            fileName:'Video',
            uploadDate: '21.25.2020',
            video: true
          
          },

          {
            fileName: 'Pdf',
            uploadDate: '21.24.2020',
           
            
          },

          {
            fileName: 'Video',
            uploadDate: '21.24.2020',
            video: true
          },

          {
            fileName: 'Pdf',
            uploadDate: '21.24.2020',
          },

          {
            fileName: 'Pdf',
            uploadDate: '21.24.2020',


          },
          {
            fileName: 'Video',
            uploadDate: '21.24.2020',
            video: true
          },


        ]
      }
    }
    
  }
</script>
