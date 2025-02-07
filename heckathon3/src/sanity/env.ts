export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-18'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
 "skRY8Ucq1GFJNVOXeg15rzT9Pm9eDVNg8kAGCb9Rp4fKJ0gCfezOYwiOohUygs0zixAdbQO3gm18XocPsBqKBpZVkIfArmsKxg1uZcOHFuGaNrKtmYJ2tyvyiEL9lOKjCrzV5mnLMr5MN7l25G8UPYTZMwm7YdrRyz2p6DQTdw43mYp2avGZ",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
