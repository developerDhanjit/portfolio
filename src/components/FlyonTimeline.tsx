import React from 'react';

const FlyonTimeline = () => {
  return (
    <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical timeline-centered">
      {/* timeline item 1 */}
      <li>
        <div className="timeline-middle h-16">
          <span className="bg-error/20 flex size-8 items-center justify-center rounded-full">
            <span className="icon-[tabler--file] text-error size-5"></span>
          </span>
        </div>
        <div className="timeline-start me-4 mt-8 max-md:pt-2">
          <div className="text-base-content/50 text-sm font-normal">2 month’s ago</div>
        </div>
        <div className="timeline-end ms-4 mb-8">
          <div className="card">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">You've uploaded doc pdf to the FlyonUI</h5>
              <p>
                The process of recording the key project details and producing the documents that are required to implement
                it successfully. Simply put, it's an umbrella term which includes all the documents created over the course
                of the project.
              </p>
              <div className="card-actions">
                <button className="btn btn-sm btn-soft btn-secondary">
                  <span className="icon-[tabler--file-type-pdf] text-error max-sm:hidden"></span>
                  documentation.pdf
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* timeline item 2 */}
      <li className="timeline-shift">
        <div className="timeline-middle h-16">
          <span className="bg-success/20 flex size-8 items-center justify-center rounded-full">
            <span className="icon-[tabler--photo] text-success size-5"></span>
          </span>
        </div>
        <div className="timeline-end mt-6 px-1 md:mt-8">
          <div className="text-base-content/50 text-sm font-normal">24 day's ago</div>
        </div>
        <div className="timeline-start me-4 mb-8">
          <div className="card">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">Heather added 4 images to album</h5>
              <p>
                In the Select Image for Project dialog box, choose one of the following: Under the Upload New Image section
              </p>
              <div className="flex flex-wrap gap-4">
                <img src="https://cdn.flyonui.com/fy-assets/components/timeline/image-2.png" alt="timeline Image" className="w-16 rounded-sm" />
                <img src="https://cdn.flyonui.com/fy-assets/components/timeline/image-3.png" alt="timeline Image" className="w-16 rounded-sm" />
                <img src="https://cdn.flyonui.com/fy-assets/components/timeline/image-1.png" alt="timeline Image" className="w-16 rounded-sm" />
                <img src="https://cdn.flyonui.com/fy-assets/components/timeline/image-4.png" alt="timeline Image" className="w-16 rounded-sm" />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* timeline item 3 */}
      <li>
        <div className="timeline-middle h-16">
          <span className="bg-warning/20 flex size-8 items-center justify-center rounded-full">
            <span className="icon-[tabler--star] text-warning size-5"></span>
          </span>
        </div>
        <div className="timeline-start me-4 mt-8 max-md:pt-2">
          <div className="text-base-content/50 text-sm font-normal">2 week's ago</div>
        </div>
        <div className="timeline-end ms-4 mb-8">
          <div className="card">
            <div className="card-body gap-4">
              <h5 className="card-title text-lg">Loretta wrote a review on FlyonUI</h5>
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="size-9.5 rounded-full">
                    <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="User Avatar" />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Loretta Moore</p>
                  <p className="text-sm">CTO of Airbnb</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-2 text-nowrap">
                <div className="text-warning flex items-center">
                  <span className="icon-[tabler--star-filled] size-5"></span>
                  <span className="icon-[tabler--star-filled] size-5"></span>
                  <span className="icon-[tabler--star-filled] size-5"></span>
                  <span className="icon-[tabler--star-filled] size-5"></span>
                  <span className="icon-[tabler--star-filled] size-5"></span>
                </div>
                <span className="badge badge-soft badge-success uppercase">
                  <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-6.png" alt="Anna" className="size-4.5 rounded-full" />
                  Verified buyer
                </span>
              </div>
              <p>
                I wish I could select more than one main reason for rating this. I love how they constantly work on to make
                the template better. I am so thankful for this. Also, in the past, they had responded well to my tickets.
                Thank you for this great theme, for such an amazing support, for the better updates. I wish I could rate
                this for so many times. I highly recommend this template!
              </p>
            </div>
          </div>
        </div>
        <hr />
      </li>
      {/* Additional timeline items can go here... */}
    </ul>
  );
};

export default FlyonTimeline;
