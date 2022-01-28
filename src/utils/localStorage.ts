export enum SettingKey {
  AccessToken = 'Act',
}

export const DefaultSettings = {
  [SettingKey.AccessToken]: null,
};

export const getLocalSetting = <T>(key: SettingKey): T => {
  const localItem = localStorage.getItem(key);

  if (!localItem) return DefaultSettings[key] as unknown as T;

  try {
    return JSON.parse(localItem);
  } catch {
    return localItem as unknown as T;
  }
};

export const setLocalSetting = <T>(key: SettingKey, value: T) => {
  const item = typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(key, item);
};
