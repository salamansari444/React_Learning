

function Card({userName ='Jason', src}){
    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
            <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={src} alt="" width="384" height="512"/>
             <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                  <blockquote>
                   <p className="text-lg font-medium">
                   2.5 year experienced Java developer proficient in core Java concepts, Spring framework.

                    </p>
                    </blockquote>
                    <figcaption class="font-medium">
                    <div className="text-sky-500 dark:text-sky-400">
                      {userName}
                    </div>
                    <div className="text-slate-700 dark:text-slate-500">
                         SoftwarNamee Engineer, Mumbai
                     </div>
    </figcaption>
  </div>
</figure>

        </div>

    )
}

export default Card